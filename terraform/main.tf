module "instances" {
  source = "./instances"

  ec2_configs = var.ec2_instances
  sg_id       = module.sg.id
  subnet_id   = module.vpc.public_subnets[0].id
}

output "instances" {
  value = module.instances.instances
}
