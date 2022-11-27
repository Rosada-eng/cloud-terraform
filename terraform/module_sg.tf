module "sg" {
  source = "./sg"

  vpc_id          = module.vpc.id
  security_groups = var.security_groups
}

output "sg" {
  value = module.sg.security_groups
}

output "default_security_group_id" {
  value = module.sg.default_security_group_id
}
