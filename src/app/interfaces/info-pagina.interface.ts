export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo_trabajo?: any[];
}

export interface InfoService {
  equipo: Equipo[];
}

export interface Equipo {
  frase: string;
  nombre: string;
  subtitulo: string;
  twitter: string;
  url: string;
}
