import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citas = [
    {
      id:1,
      autor: "Nicole Graus",
      libro: "",
      cita: "O sos careta o sos antisocial, vos elegís"
    },
    {
      id:2,
      autor: "Friedrich Nietzsche",
      libro: "Sobre verdad y mentira en sentido extramoral",
      cita: "¿Qué es entonces la verdad? Una hueste en movimiento de metáforas, metonimias, antropomorfismos, en resumidas cuentas, una suma de relaciones humanas que han sido realzadas, extrapoladas y adornadas poética y retóricamente y que, después de un prolongado uso, un pueblo considera firmes, canónicas y vinculantes; las verdades son ilusiones de las que se ha olvidado que lo son; metáforas que se han vuelto gastadas y sin fuerza sensible, monedas que han perdido su troquelado y no son ahora ya consideradas como monedas sino como metal"
    },
    {
      id:3,
      autor: "Canserbero",
      libro: "Album Muerte, cancion El Primer Trago",
      cita: ["Que alguien me diga: ¿cómo coño hago?",
      "Y me encargo de aceptar esta realidad tan bastarda",
      "Que alguien me diga quien conoce un trago",
      "Más amargo que tragar un nudo atado a tu garganta"]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
