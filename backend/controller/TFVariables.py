
class TFVariables:
    def __init__(self):
        ## --- Default by user --- ##
        self.aws_region = 'us-east-1'
        self.vpc_id = ''
        self.subnet_cidrs = []

        #
        self.security_groups = []
        self.instances = []
        self.users = []

    def compile(self):
        # return json
        
        return {
            'aws_region': self.aws_region,
            'vpc_id': self.vpc_id,
            'subnet_cidrs': self.subnet_cidrs,
            'security_groups': self.security_groups,
            'instances': self.instances,
            'users': self.users
        }