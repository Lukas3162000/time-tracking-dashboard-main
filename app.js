Definiere die Anforderungen:


Styling Stuff:

1. Styling anpassung
- "Report for" in der profileCard bekommt eine opacity von vllt 50% (Siehe bild)

2. Hoverstates und cursor

- Man muss über die daily, weekly und Monthly menu Punkte der Profile-Card hovern können
   - Wenn die Maus über einen der 3 Punkte hovert wird der Curser zu einem Pointer
   - Der ausgewählte Menu-punkt wird im hoverstate zu #FFFFFF gefärbt, die nicht ausgewählten bleiben 
   bei einer Visibilty von vllt 50%

- Man muss über die normalen cards hovern können
    - Hovert man über eine normal-card wird ändert diese die Farbe/wird heller
    - Der Curser wird ebenfalls zum Pointer

- Man muss über die 3 Punkte der normal card hover können
    - Hovert man über die 3 Punkte wird der Cursor zum Pointer


Funktionalität

1. Wenn man Daily im Profil auswählt, ändern sich die Stunden-Angaben der Normal Cards auf die Daily Stunden
    - Diese Informationen werden aus der JSON extrahiert
2. Selbiges für weekly
3. Selbiges für Monthly





zusatz:
4. Anpassung der normal-Card informationen, sodass die Info um welche Card es sich handelt auch aus der JSON gezogen werden kann
(also zb. der title "Work" ist bei normal card 1 aus der json weil der title dort json[0] ist. und die Informationen auch irgendwie json[0].timeframes.daily usw. - Also die hardgecodeden sachen raus und mit der Datenbank quasi modularer aufbauen/erstetzen)
