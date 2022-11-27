module "vpc" {
  source = "./vpc"

  public_subnet_cidrs = var.vpc_public_subnet_cidrs
  availability_zones  = var.availability_zones
}

output "vpc_id" {
  value = module.vpc.id
}

output "vpc_name" {
  value = module.vpc.vpc_name
}

output "vpc_arn" {
  value = module.vpc.vpc_arn
}

output "vpc_cidr_block" {
  value = module.vpc.vpc_cidr_block
}

output "public_subnets" {
  value = module.vpc.public_subnets
}

output "default_public_subnet_id" {
  value = module.vpc.public_subnets[0].id
}

