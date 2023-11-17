from pet import Pet 
class dog(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "dog", tricks)