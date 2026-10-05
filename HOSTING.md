# Hosting the wiki

The wiki is published with **AWS (S3 + CloudFront)** in the lab's AWS @ Penn account, built from
`infra/terraform/` and `.github/workflows/deploy-aws.yml`. Nobody installs
anything to read or edit: readers use the website, editors use the pencil icon on any page, which
opens GitHub's web editor, and every commit to `main` republishes the site.

```
edit on GitHub (pencil) → commit → GitHub Actions builds and uploads → CloudFront serves it
```

## AWS: one-time setup (about 30 minutes, all in the browser)

What gets created: a private S3 bucket, a CloudFront distribution in front of it (HTTPS; the bucket
is reachable only through CloudFront), a small CloudFront function that maps `/page/` to
`/page/index.html`, and an IAM role that GitHub Actions assumes with OIDC, so no access keys are
ever created or pasted anywhere. Cost: well under $5/month at this size (plus about $6/month if the
IP allowlist below is turned on).

**Decide who can read it before step 4.** S3 + CloudFront on its own is a *public* website: anyone
with the address can read it, and the wiki describes internal systems, servers and protocols.
Before publishing, either (a) set `allowed_cidrs` to Penn's campus and VPN address ranges (ask Penn
ISC), so only people on the Penn network or VPN can open it; (b) add a PennKey login (Cognito
federated with Penn WebLogin, which needs a registration with Penn ISC Identity); or (c) clean the
content so it is fit to be public. Until then, leave the GitHub variables unset and the deploy job
stays off.

1. **Sign in.** Go to https://aws.cloud.upenn.edu, sign in with PennKey, and open the lab's account
   with a role that can create S3, CloudFront, WAF and IAM resources.
2. **Open CloudShell** (the `>_` icon in the top bar of the AWS console): a terminal in the browser,
   nothing installed on your computer. Install Terraform there once:
   ```bash
   curl -sSLo tf.zip https://releases.hashicorp.com/terraform/1.9.8/terraform_1.9.8_linux_amd64.zip
   mkdir -p ~/bin && unzip -oq tf.zip -d ~/bin && export PATH=~/bin:$PATH && terraform version
   ```
3. **Bring the Terraform files.** On GitHub, open this repository → Code → Download ZIP. In
   CloudShell: Actions → Upload file → the ZIP, then:
   ```bash
   unzip -q neurobridge-wiki-main.zip && cd neurobridge-wiki-main/infra/terraform
   cp example.tfvars terraform.tfvars    # edit with nano if you set a domain or IP ranges
   ```
4. **Create everything.**
   ```bash
   terraform init
   terraform apply            # review the plan, type yes
   ```
   If it fails because the GitHub OIDC provider already exists in the account, set
   `create_github_oidc_provider = false` in `terraform.tfvars` and apply again. Keep the folder
   (CloudShell keeps your home directory): `terraform.tfstate` there is the record of what was
   created. To share it with a colleague, move it to an S3 backend (see `providers.tf`).
5. **Connect GitHub.** `terraform output` prints three values. In GitHub → this repository →
   Settings → Secrets and variables → Actions → **Variables** tab, add `AWS_ROLE_ARN`, `S3_BUCKET`
   and `CLOUDFRONT_DISTRIBUTION_ID`. They are identifiers, not secrets.
6. **Publish.** GitHub → Actions → *Deploy site to AWS* → Run workflow. About two minutes later the
   site is at `site_url`. From then on every commit to `main` republishes it.

### Custom domain (optional, e.g. `wiki.neurobridge.link`)

1. In AWS Certificate Manager, **in us-east-1**, request a public certificate for the domain with DNS
   validation; add the CNAME it shows at the domain's DNS provider (Hostinger) and wait for *Issued*.
2. Put `domain_name` and `acm_certificate_arn` in `terraform.tfvars` and run `terraform apply`.
3. At the DNS provider, add a CNAME from `wiki` to the `cloudfront_domain` output.

### Day to day (AWS)

- Readers open the address. Editors need a GitHub account with access to the repository, then the pencil.
- A failed build (for example the content check finding a password) stops the upload and leaves the
  previous version online; the log is under GitHub → Actions.
- To take the site down: `terraform destroy` in the same CloudShell folder.

## The CNT manual

The CNT procedures manual is hosted the same way from its own repository. When it is live, point this
wiki's CNT links at it by changing two lines in `mkdocs.yml` (`extra.wiki.cnt_manual`): `url:` the
site address with a trailing slash, and `style: site`.
