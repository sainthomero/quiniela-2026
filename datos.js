// ============================================================
//  ARCHIVO DE DATOS — edita este archivo para actualizar la página
//  Después de editar, sube este archivo a GitHub y la página se actualiza
// ============================================================

const DATOS = {

  // ── Fase actual ────────────────────────────────────────────
  faseActual: "Previo al torneo",
  // Opciones: "Previo al torneo" | "Fase de grupos" | "16avos de final" |
  //           "8vos de final" | "Cuartos de final" | "Semifinales" | "Final"

  // ── Participantes ──────────────────────────────────────────
  // Los puntos se actualizan manualmente después de cada jornada
  participantes: [
    // { nombre: "Alberto", partidos: 0, grupos: 0, avances: 0, especiales: 0,
    //   pronosticos: {
    //     "México-Chequia": [2,1],      // [goles local, goles visitante]
    //     "Corea del Sur-Sudáfrica": [1,0],
    //     "Partido 1": [2,1],           // para rondas eliminatorias usar el label del partido
    //   }
    // },
  ],

  // ── Resultados en vivo ─────────────────────────────────────
  // Este campo es referencial, los resultados reales van en PARTIDOS (index.html)
  // Aquí puedes agregar un resumen de últimos resultados si quieres
  resultados: [],

};

// ── Actualización de equipos en rondas eliminatorias ──────────
// Cuando se conozcan los clasificados, actualiza PARTIDOS.elim en index.html
// Busca el partido por su índice y cambia h/hf/a/af:
// Ejemplo: PARTIDOS.elim[0].h = "Argentina"; PARTIDOS.elim[0].hf = "🇦🇷";
//          PARTIDOS.elim[0].a = "Brasil";     PARTIDOS.elim[0].af = "🇧🇷";

// ── Actualización de resultados ───────────────────────────────
// Para marcar un partido como jugado, cambia gl y gv en PARTIDOS:
// En fase de grupos: PARTIDOS.grupos[0].gl = 2; PARTIDOS.grupos[0].gv = 1;
// En eliminatorias:  PARTIDOS.elim[0].gl = 1; PARTIDOS.elim[0].gv = 0;
//                    PARTIDOS.elim[0].avanza = "h"; // "h" = local, "a" = visitante
