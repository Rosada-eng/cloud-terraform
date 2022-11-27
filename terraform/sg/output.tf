output "security_groups" {
  value = aws_security_group.sg
}

output "default_security_group_id" {
  value = aws_security_group.sg[keys(aws_security_group.sg)[0]].id
}
