output "users" {
  value = { for user in aws_iam_user.user : user.name => user.id }
}

