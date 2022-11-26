module "users" {
  source = "./users"

  users = var.users
}

output "users" {
  value = module.users.users
}
