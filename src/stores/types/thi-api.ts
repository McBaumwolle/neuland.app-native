export interface APIResponse {
    date: string
    time: string
    status: number
    data: any[]
}

export interface Announcements {
    date: Date
    title: string
    announcement: string
}

export interface SessionClose {
    date: string
    time: string
    status: number
    data: string[]
}

export interface SessionCreate {
    date: string
    time: string
    status: number
    data: Array<number | string>
}

export interface Exams {
    exam_ts: Date
    exm_date: Date
    exam_time: Date
    titel: string
    exam_rooms: string
    exam_seat: string
    pruefer_namen: string[]
    anmerkung: null
    pruefungs_art: string
    modus: string
    hilfsmittel: string[]
    anm_ts: Date
    ancode: string
}

export interface Grades {
    stg: string
    kztn: string
    pon: string
    titel: string
    ects: string
    fristsem: string
    note: string
    frwpf: string
    anrech: string
}

export interface Jobs {
    date: string
    time: string
    status: number
    data: Array<number | string>
}

export interface Lecturers {
    id: string
    name: string
    vorname: null | string
    titel: null | string
    raum: null | string
    email: string
    tel_dienst: string
    sprechstunde: null | string
    einsichtnahme: null | string
    ist_intern: IstIntern
    organisation: Organisation | null
    funktion: Funktion
}

export enum Funktion {
    LaboringenieurIn = 'Laboringenieur(in)',
    LehrbeauftragteR = 'Lehrbeauftragte(r)',
    LehrkraftFürBesondereAufgaben = 'Lehrkraft für besondere Aufgaben',
    ProfessorIn = 'Professor(in)',
    Unbestimmt = 'unbestimmt',
    WissMitarbeiterInMITDeputat = 'Wiss. Mitarbeiter(in) mit Deputat',
    WissenschaftlMitarbeiterIn = 'Wissenschaftl. Mitarbeiter(in)',
}

export enum IstIntern {
    F = 'f',
    T = 't',
}

export enum Organisation {
    FakultätBusinessSchool = 'Fakultät Business School',
    FakultätElektroUndInformationstechnik = 'Fakultät Elektro- und Informationstechnik',
    FakultätInformatik = 'Fakultät Informatik',
    FakultätMaschinenbau = 'Fakultät Maschinenbau',
    FakultätWirtschaftsingenieurwesen = 'Fakultät Wirtschaftsingenieurwesen',
    InstitutFürAkademischeWeiterbildung = 'Institut für Akademische Weiterbildung',
    NachhaltigeInfrastruktur = 'Nachhaltige Infrastruktur',
    Sprachenzentrum = 'Sprachenzentrum',
    Verwaltung = 'Verwaltung',
    ZentrumFürAngewandteForschung = 'Zentrum für Angewandte Forschung',
}

export interface PersData {
    persdata: PersDataDetails
    pcounter: string
}

export interface PersDataDetails {
    mtknr: string
    bibnr: string
    user: string
    name: string
    vname: string
    plz: string
    ort: string
    str: string
    telefon: string
    email: string
    fhmail: string
    rue: string
    rue_sem: string
    stg: string
    fachrich: string
    pvers: string
    po_url: string
    stgru: string
    rchtg: null
    swpkt: string
    aaspf_echt: string
    pcounter?: string
}

export interface Rooms {
    datum: Date
    rtypes: Rtype[]
}

export interface Rtype {
    raumtyp: Raumtyp
    stunden: Stunden
}

export enum Raumtyp {
    KleinerHörsaal4079Plätze = 'Kleiner Hörsaal  (40-79 Plätze)',
    PCPool = 'PC-Pool',
    Seminarraum40Plätze = 'Seminarraum (< 40 Plätze)',
}

export type Stunden = Record<number, RoomsStatus[]>

export interface RoomsStatus {
    von: Date
    bis: Date
    raeume: string[]
}

export interface SpecialPeriods {
    von: Date
    bis: Date
    intervall: string
}

export interface ThiEvents {
    date: Date
    title: string
    href: string
    teaser: string
    img: string
}

export interface ThiNews {
    img: string
    title: string
    href: string
    teaser: string
    date: Date
}

export interface ThiWebinfo {
    date: string
    time: string
    status: number
    data: Array<string[] | number>
}

export interface Timetable {
    date: Date
    hours: Hours
}
export type Hours = Record<number, Lecture[]>

export interface Lecture {
    von: Date
    bis: Date
    lvId: string
    details: Details
}

export interface Details {
    raum: string
    fach: string
    veranstaltung: string
    dozent: string
    stg: string
    stgru: string
    teilgruppe: string
    sws: string
    ectspoints: string
    pruefung: string
    ziel: null | string
    inhalt: null | string
    literatur: null | string
}