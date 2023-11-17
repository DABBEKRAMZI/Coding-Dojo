from ninja import Ninja 
from pet import Pet
from dog import dog

boyka= Pet("boyka","dog","attack")
anis = Ninja("anis","laghmani","thamer","meat",boyka)
anis.feed().walk().bathe()
niha=dog("nino","attack")
barhoum = Ninja("barhoum","dabbek","cute","couscous",niha)
barhoum.feed().walk().bathe()

