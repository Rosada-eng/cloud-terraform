variable "public_subnet_cidrs" {
  type        = list(string)
  description = "Public Subnet CIDRs values"
}

variable "private_subnet_cidrs" {
  type        = list(string)
  description = "Private Subnet CIDRs values"
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability Zones"
}
