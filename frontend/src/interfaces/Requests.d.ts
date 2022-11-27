interface IRequestData {
    default_public_subnet_id: ITerraformObject;
    default_security_group_id: ITerraformObject;
    instances: ITerraformObject;
    public_subnets: ITerraformObject;
    sg: ITerraformObject;
    users: ITerraformObject;
    vpc_arn: ITerraformObject;
    vpc_cidr_block: ITerraformObject;
    vpc_id: ITerraformObject;
    vpc_name: ITerraformObject;
}