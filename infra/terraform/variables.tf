variable "project" {
  description = "Name used for the bucket, distribution and IAM role."
  type        = string
  default     = "neurobridge-wiki"
}

variable "github_repo" {
  description = "GitHub repository allowed to deploy, as owner/name."
  type        = string
  default     = "penn-neurobridge/neurobridge-wiki"
}

variable "github_branch" {
  description = "Branch whose pushes may deploy."
  type        = string
  default     = "main"
}

variable "create_github_oidc_provider" {
  description = "Create the GitHub OIDC identity provider. Set false if the AWS account already has one (token.actions.githubusercontent.com)."
  type        = bool
  default     = false
}

variable "domain_name" {
  description = "Optional custom domain, e.g. wiki.neurobridge.link. Leave empty to use the cloudfront.net address."
  type        = string
  default     = ""
}

variable "acm_certificate_arn" {
  description = "ACM certificate (us-east-1) covering domain_name. Required when domain_name is set."
  type        = string
  default     = ""
}

variable "allowed_cidrs" {
  description = "If non-empty, only these IP ranges (e.g. Penn campus and VPN ranges from ISC) can open the site, via AWS WAF (~$6/month). Empty = no IP restriction."
  type        = list(string)
  default     = []
}
