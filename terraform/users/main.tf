resource "aws_iam_user" "user" {
  for_each = toset(var.users)
  name     = each.key
  tags = {
    "name" = each.key
  }

}

resource "aws_iam_user_policy" "user_policy" {
  depends_on = [
    aws_iam_user.user
  ]
  count  = length(var.users)
  name   = "new"
  user   = element(var.users, count.index)
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}
