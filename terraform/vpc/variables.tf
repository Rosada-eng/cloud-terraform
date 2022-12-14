variable "public_subnet_cidrs" {
  type        = list(string)
  description = "Public Subnet CIDRs values"
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability Zones"
}

variable "vpc_name" {
  type        = string
  description = "VPC Name"
}
