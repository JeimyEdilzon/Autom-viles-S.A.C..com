
const valores = [
    {
        nombre: "Integridad",
        descripcion: "Nos preocupamos en promover y mantener en nuestra empresa un ambiente de respeto, ética y armonía entre nuestros colaboradores, para que nuestros productos y servicios generen garantía, seguridad y credibilidad entre nuestros clientes; y seamos capaces de ofrecer soluciones viables y competitivas al alcance de los diferentes mercados."
    },
    {
        nombre: "Adaptación",
        descripcion: "Contamos con la capacidad de ajustarnos de manera ágil y eficiente a los cambios del entorno, las demandas del mercado automotriz y las necesidades de nuestros clientes. Como empresa dedicada a la venta y postventa de vehículos Toyota, la adaptación nos permite mantenernos competitivos, implementar mejoras continuas en nuestros procesos y ofrecer soluciones innovadoras que garanticen la excelencia en nuestro servicio."
    },
    {
        nombre: "Compromiso",
        descripcion: "Ponemos al servicio de nuestros clientes todas nuestras capacidades para ofrecer soluciones integrales y acompañar su crecimiento y mejora continua."
    },
    {
        nombre: "Innovación",
        descripcion: "Queremos estar a la vanguardia del mercado para poder proponerle soluciones integrales, creativas y rentables para el éxito. Nuestro valor agregado es la búsqueda constante de ideas novedosas para beneficios de nuestros clientes y de nuestra organización."
    },
    {
        nombre: "Vocación de servicio",
        descripcion: "Generamos un ambiente interno de responsabilidad en la calidad de nuestro trabajo, con el objetivo de brindar atención personalizada de manera cordial y proactiva, a fin de garantizar un servicio con altos estándares acorde a las exigencias del mercado."
    }
];

const reglamentos = [
    {
        tema: "Disposiciones generales",
        articulos: [
            {
                numero: "Artículo 1",
                texto: "El presente Reglamento Interno de Trabajo establece las normas que regulan las relaciones laborales entre Automóviles S.A.C. y sus trabajadores. Todos los colaboradores deben mantener una conducta respetuosa, responsable y acorde con las disposiciones de la empresa."
            },
            {
                numero: "Artículo 2",
                texto: "Las disposiciones de este Reglamento son de cumplimiento obligatorio para todos los trabajadores. Asimismo, deben respetarse las normas de ética corporativa, los estándares Toyota y las reglas de seguridad y salud ocupacional. El reglamento estará disponible para consulta en la intranet de la empresa y cada trabajador es responsable de conocerlo y cumplirlo."
            }
        ]
    },
    {
        tema: "Jornada, horario y asistencia",
        articulos: [
            {
                numero: "Artículo 20",
                texto: "Los trabajadores deberán comunicar a la Administración y al área de SSOMA cualquier cambio en sus datos personales o familiares. El último domicilio comunicado a la empresa se considerará válido hasta que el trabajador informe formalmente su modificación."
            },
            {
                numero: "Artículo 21",
                texto: "La empresa determina los horarios de trabajo y los turnos correspondientes, los cuales serán comunicados a los trabajadores mediante los medios establecidos."
            },
            {
                numero: "Artículo 22",
                texto: "El control de asistencia es personal. Cada trabajador debe registrar su ingreso, salida y los descansos correspondientes. Debe permanecer en su área de trabajo durante la jornada y solicitar autorización para retirarse. Registrar la asistencia de otro trabajador constituye una falta grave y puede ser sancionado con suspensión de dos días."
            },
            {
                numero: "Artículo 23",
                texto: "HUANCAYO:\nLunes a viernes: turno 1, de 08:00 a 17:15; turno 2, de 08:45 a 18:00.\nSábados: de 08:00 a 13:00.\nEl refrigerio es rotativo, de una hora, entre las 12:00 y las 13:00 o entre las 13:00 y las 14:00.\n\nAYACUCHO:\nLunes a viernes: de 08:00 a 18:00.\nSábados: de 08:00 a 13:00.\nEl refrigerio es rotativo, de una hora y cuarenta minutos, en los siguientes rangos: 12:10 a 13:50, 13:00 a 14:40 o 13:50 a 15:30."
            },
            {
                numero: "Artículo 24",
                texto: "La empresa podrá modificar los horarios y turnos de trabajo de acuerdo con las necesidades operativas y dentro de los límites establecidos por la legislación aplicable."
            }
        ]
    },
    {
        tema: "Trabajo en sobretiempo",
        articulos: [
            {
                numero: "Artículos 25 al 31",
                texto: "El trabajo en sobretiempo es el que se realiza fuera de la jornada ordinaria. Salvo situaciones de emergencia o casos establecidos por la ley, el sobretiempo es voluntario y debe contar con autorización previa y escrita de la empresa. Las labores urgentes o imprevistas deberán ser comunicadas y autorizadas por el responsable correspondiente.\n\nLa compensación o el pago del sobretiempo se realizará conforme a la legislación vigente y a los acuerdos válidos entre la empresa y el trabajador. Las horas podrán compensarse con descanso cuando exista acuerdo entre las partes. Las ausencias, permisos o tardanzas podrán compensarse mediante acuerdo.\n\nNo se considerará sobretiempo la permanencia en las instalaciones sin autorización escrita para realizar labores adicionales, ni los casos excluidos de la jornada máxima de acuerdo con la normativa aplicable."
            }
        ]
    },
    {
        tema: "Ausencias y justificación",
        articulos: [
            {
                numero: "Artículos 37 y 38",
                texto: "El trabajador debe comunicar inmediatamente cualquier ausencia, indicando el motivo y el lugar donde se encuentra. La justificación escrita debe presentarse dentro de los dos días hábiles siguientes, adjuntando los documentos que correspondan. La empresa determinará si la ausencia es justificada o injustificada conforme a las reglas internas y la legislación aplicable."
            }
        ]
    },
    {
        tema: "Lactario institucional",
        articulos: [
            {
                numero: "Artículos 55 al 60",
                texto: "La empresa aplicará las disposiciones relativas al lactario institucional de acuerdo con la Ley N.º 29896 y el Decreto Supremo N.º 001-2016-MIMP. Cuando corresponda, se implementará un ambiente destinado a la extracción y conservación de leche materna, con privacidad, higiene, condiciones adecuadas y los elementos necesarios para su uso.\n\nEl ambiente debe cumplir las condiciones aplicables de infraestructura y equipamiento, incluyendo las condiciones de conservación de la leche materna. El uso del lactario se realizará dentro del tiempo previsto por la normativa vigente. La Administración y el área de SSOMA serán responsables de su gestión y cuidado."
            }
        ]
    },
    {
        tema: "Descanso semanal y vacaciones",
        articulos: [
            {
                numero: "Artículos 61 al 63",
                texto: "Los trabajadores tienen derecho a un descanso semanal mínimo de veinticuatro horas consecutivas, preferentemente el domingo. La empresa podrá establecer otro día de descanso conforme a las necesidades operativas y la legislación vigente. Cuando se trabaje durante el día de descanso sin otorgarse descanso sustitutorio, se aplicará el pago que corresponda, incluido el recargo legal del 100 % cuando resulte aplicable."
            },
            {
                numero: "Artículos 64 al 66",
                texto: "El descanso vacacional se otorgará de acuerdo con los requisitos, plazos y condiciones establecidos en la legislación laboral y las disposiciones internas. La programación de las vacaciones deberá coordinarse con la empresa.\n\nEl fraccionamiento del descanso vacacional requerirá el acuerdo escrito correspondiente. La solicitud deberá presentarse con la anticipación establecida por la empresa y la normativa aplicable. El trabajador deberá completar el formulario respectivo y coordinar la fecha efectiva del descanso y el pago vacacional."
            }
        ]
    },
    {
        tema: "Confidencialidad y conducta",
        articulos: [
            {
                numero: "Artículo 69",
                texto: "Los trabajadores deben mantener la confidencialidad de la información de la empresa y de sus clientes. No deberán divulgar información sobre operaciones, actividades comerciales ni asuntos internos sin autorización. Asimismo, deben evitar relaciones o transacciones con clientes y proveedores que generen conflictos de intereses. El incumplimiento podrá dar lugar a medidas disciplinarias, incluyendo amonestación, suspensión o despido, según la gravedad de la falta y la normativa aplicable."
            }
        ]
    }
];

const listaValores = document.getElementById("listaValores");
const listaReglamentos = document.getElementById("listaReglamentos");
const buscador = document.getElementById("buscarReglamento");
const sinResultados = document.getElementById("sinResultados");

function crearValores() {
    listaValores.innerHTML = "";

    valores.forEach((valor, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "valor-card";

        const boton = document.createElement("button");
        boton.className = "valor-titulo";
        boton.type = "button";
        boton.setAttribute("aria-expanded", "false");

        const numero = document.createElement("span");
        numero.className = "valor-numero";
        numero.textContent = String(indice + 1).padStart(2, "0");

        const nombre = document.createElement("span");
        nombre.textContent = valor.nombre;

        const flecha = document.createElement("i");
        flecha.className = "fa-solid fa-chevron-down flecha";

        boton.append(numero, nombre, flecha);

        const descripcion = document.createElement("div");
        descripcion.className = "valor-descripcion";
        descripcion.hidden = true;
        descripcion.textContent = valor.descripcion;

        boton.addEventListener("click", () => {
            const abierto = tarjeta.classList.toggle("abierto");
            descripcion.hidden = !abierto;
            boton.setAttribute("aria-expanded", String(abierto));
        });

        tarjeta.append(boton, descripcion);
        listaValores.appendChild(tarjeta);
    });
}

function crearReglamentos(filtro = "") {
    listaReglamentos.innerHTML = "";

    const busqueda = filtro.toLocaleLowerCase("es");
    let total = 0;

    reglamentos.forEach((grupo) => {
        const articulosFiltrados = grupo.articulos.filter((articulo) => {
            return (
                grupo.tema.toLocaleLowerCase("es").includes(busqueda) ||
                articulo.numero.toLocaleLowerCase("es").includes(busqueda) ||
                articulo.texto.toLocaleLowerCase("es").includes(busqueda)
            );
        });

        if (articulosFiltrados.length === 0) return;

        total += articulosFiltrados.length;

        const tarjeta = document.createElement("article");
        tarjeta.className = "reglamento-card";

        const boton = document.createElement("button");
        boton.className = "reglamento-titulo";
        boton.type = "button";
        boton.setAttribute("aria-expanded", "false");

        const icono = document.createElement("i");
        icono.className = "fa-solid fa-file-lines icono";

        const titulo = document.createElement("span");
        titulo.textContent = grupo.tema;

        const flecha = document.createElement("i");
        flecha.className = "fa-solid fa-chevron-down flecha";

        boton.append(icono, titulo, flecha);

        const contenido = document.createElement("div");
        contenido.className = "reglamento-contenido";
        contenido.hidden = true;

        articulosFiltrados.forEach((articulo) => {
            const bloque = document.createElement("div");
            bloque.className = "articulo";

            const encabezado = document.createElement("h3");
            encabezado.textContent = articulo.numero;

            const texto = document.createElement("p");
            texto.textContent = articulo.texto;

            bloque.append(encabezado, texto);
            contenido.appendChild(bloque);
        });

        boton.addEventListener("click", () => {
            const abierto = tarjeta.classList.toggle("abierto");
            contenido.hidden = !abierto;
            boton.setAttribute("aria-expanded", String(abierto));
        });

        tarjeta.append(boton, contenido);
        listaReglamentos.appendChild(tarjeta);
    });

    sinResultados.hidden = total !== 0;
}

buscador.addEventListener("input", (evento) => {
    crearReglamentos(evento.target.value);
});

crearValores();
crearReglamentos();

function volverAlMenu() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}
