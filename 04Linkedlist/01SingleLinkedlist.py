        
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class List:
    def __init__(self):
        self.head = None
        self.size = 0
        
    def insert(self, data):
        newnode = Node(data)
        
        