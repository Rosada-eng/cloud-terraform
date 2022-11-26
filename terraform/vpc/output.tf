output "id" {
  value = aws_vpc.main.id
}

output "vpc_arn" {
  value = aws_vpc.main.arn
}

output "vpc_cidr_block" {
  value = aws_vpc.main.cidr_block
}

output "vpc_name" {
  value = aws_vpc.main.tags["Name"]
}


output "gateway_id" {
  value = aws_internet_gateway.gw.id
}

output "public_subnets" {
  value = aws_subnet.public_subnets
}
