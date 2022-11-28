variable "AWS_KEY_ID" {
  type = string
}

variable "AWS_SECRET_ACCESS" {
  type = string
}

variable "vpc_name" {
  type = string
}
variable "vpc_public_subnet_cidrs" {
  type        = list(string)
  description = "Public Subnet CIDRs values"
  default     = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
}


variable "availability_zones" {
  type        = list(string)
  description = "Availability Zones"
  default     = ["us-east-1a", "us-east-1b", "us-east-1c"]
}

variable "security_groups" {
  type = list(object({
    name        = string
    description = string
    ingress = list(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = list(string)
    }))
    egress = optional(list(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = list(string)
    })))
  }))
}


variable "users" {
  type        = list(string)
  description = "List of user names to be created with access to all actions and resources"
}

variable "instances" {
  type = list(object({
    name            = string
    ami             = string
    type            = string
    key_name        = string
    is_public       = bool
    security_groups = list(string)
    subnet_id       = string
  }))
  # default = [
  #   {
  #     name      = "teste0"
  #     ami       = "ami-09d56f8956ab235b3"
  #     type      = "t2.micro"
  #     key_name  = "guilherme.rosada"
  #     is_public = true
  #   },
  #   {
  #     name      = "test1"
  #     ami       = "ami-09d56f8956ab235b3"
  #     type      = "t2.micro"
  #     key_name  = "guilherme.rosada"
  #     is_public = true
  #   }
  # ]
  description = "List of EC2 instances to be created"
}
