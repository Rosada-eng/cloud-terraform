resource "aws_instance" "ec2_instance" {
  for_each = { for instance in var.ec2_configs : instance.name => instance }

  ami           = each.value.ami
  instance_type = each.value.type

  subnet_id                   = each.value.subnet_id == "" ? var.default_subnet_id : each.value.subnet_id
  associate_public_ip_address = each.value.is_public
  key_name                    = each.value.key_name

  vpc_security_group_ids = length(each.value.security_groups) == 0 ? [var.default_security_group_id] : each.value.security_groups

  tags = {
    Name = each.value.name
  }
}
