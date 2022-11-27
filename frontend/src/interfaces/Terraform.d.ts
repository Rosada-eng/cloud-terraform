interface ITerraformObject {
    sensitive: string,
    type: string | Array<Object>,
    value: string | Array<Object>,
}

interface IVPC {
    id: string;
    name: string;
    cidr_block: string;
    arn: string;
}

interface IInstance {
    id: string;
    name: string;
    ami: string;
    arn: string;
    instance_type: string;
    instance_state: string;
    availability_zone: string | [string];
    cpu_core_count: number;
    cpu_threads_per_core: number;
    private_ip: string;
    public_ip: string;
    public_dns: string;
    subnet_id: string;
    vpc_security_group_ids : string | [string];
}

interface ISecurityGroup {
    id: string;
    arn: string;
    name: string;
    description: string;
    vpc_id: string;
    ingress: [Object];
    egress: [Object];
}

interface IIAMUser {
   name: string; 
}