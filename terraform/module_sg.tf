module "sg" {
  source = "./sg"

  vpc_id = module.vpc.id
}

output "sg_id" {
  value = module.sg.id
}
