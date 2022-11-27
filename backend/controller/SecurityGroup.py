class SecurityGroup:
    def __init__(self, 
        name:str, 
        vpc_id:str, 
        description:str ='', 
        ingress_list=[], 
        egress_list=[{
          "description": "enables output to all IPs",
          "from_port": 0,
          "to_port": 0,
          "protocol": "-1",
          "cidr_blocks": ["0.0.0.0/0"]
        }]):
        
        self.name = name
        self.vpc_id = vpc_id
        self.description = description
        self.ingress = ingress_list
        self.egress = egress_list

    def add_ingress(self, 
        from_port:int, 
        to_port:int, 
        description:str ='',
        protocol:str ='tcp',
        cidr_blocks=["0.0.0.0/0"]
    ):
        self.ingress.append({
            'from_port': from_port,
            'to_port': to_port,
            'description': description,
            'protocol': protocol,
            'cidr_blocks': cidr_blocks
        })

    def add_egress(self,
        from_port:int,
        to_port:int,
        description:str ='',
        protocol:str ='-1',
        cidr_blocks=["0.0.0.0/0"]
    ):
        self.egress.append({
            'from_port': from_port,
            'to_port': to_port,
            'description': description,
            'protocol': protocol,
            'cidr_blocks': cidr_blocks
        })

    