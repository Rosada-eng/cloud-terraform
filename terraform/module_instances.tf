module "instances" {
  source = "./instances"

  ec2_configs               = var.instances
  default_security_group_id = module.sg.default_security_group_id
  default_subnet_id         = module.vpc.public_subnets[0].id
}

output "instances" {
  value = module.instances.instances
}
