from classes.ninja import Ninja
from classes.pirate import Pirate

michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")
i =0
while (jack_sparrow.health>0 and michelangelo.health>0):
    michelangelo.attack(jack_sparrow)
    jack_sparrow.attack(michelangelo)
    i+=1
print(i)    
jack_sparrow.show_stats()
michelangelo.show_stats()