class ACOs:
    num = None
    Tipo_de_layout = None
    Banner = 0
    Titulo = None
    Titulo_Cor = None
    Cor_Fundo_Inicial= None
    Cor_Fundo_Final = None
    CTA_Cor = None
    CTA_Cor_Borda = None
    CTA_Cor_Fundo = None
    Subtitulo = None
    Subtitulo_Cor = None
    Texto_CTA = None
    Imagem = None
    Link = ""
    Método_Red= ""
    Código_Red= ""
    

    #Especifico para popups

    Tamanho_Titulo = None
    Tamanho_Subtitulo = None
    Cor_Botao_Fechar = None

    def __init__(self, num, Tipo_de_layout, Titulo, Titulo_Cor, Subtitulo, Subtitulo_Cor, Texto_CTA, CTA_Cor, Imagem, Cor_Fundo_Inicial, Cor_Fundo_Final, CTA_Cor_borda, CTA_Cor_Fundo, Link, Tamanho_Titulo, Tamanho_Subtitulo, Cor_Botao_Fechar) -> None:
        self.num = num
        self.Tipo_de_layout = Tipo_de_layout.upper()
        self.Titulo = Titulo.replace("[", "").replace("]", "")
        self.Titulo_Cor = Titulo_Cor    
        self.Subtitulo = Subtitulo.replace("[", "").replace("]", "")
        self.Subtitulo_Cor = Subtitulo_Cor
        self.Texto_CTA = Texto_CTA.replace("[", "").replace("]", "")
        self.CTA_Cor = CTA_Cor
        self.Imagem = Imagem
        self.Cor_Fundo_Inicial = Cor_Fundo_Inicial
        self.Cor_Fundo_Final = Cor_Fundo_Final
        self.CTA_Cor_Fundo = CTA_Cor_Fundo
        self.CTA_Cor_Borda = CTA_Cor_borda
        self.Tamanho_Titulo = Tamanho_Titulo
        self.Tamanho_Subtitulo = Tamanho_Subtitulo
        self.Cor_Botao_Fechar = Cor_Botao_Fechar
        if Link == None:
               ...
        else:
              self.Link = Link
              self.Código_Red = "23172"
              self.Método_Red = "Link"

        if Tamanho_Titulo == "":
                self.Tamanho_Titulo = 1
        elif Tamanho_Titulo == None:
                ...
        elif Tamanho_Titulo.upper() == "PEQUENO":
                self.Tamanho_Titulo = 1
        elif Tamanho_Titulo.upper() == "MEDIO":
                self.Tamanho_Titulo = 2
        elif Tamanho_Titulo.upper() == "GRANDE":
                self.Tamanho_Titulo = 3

        if Tamanho_Subtitulo == "":
               self.Tamanho_Subtitulo = 1
        elif Tamanho_Titulo == None:
                ...
        elif Tamanho_Subtitulo.upper() == "PEQUENO":
                self.Tamanho_Subtitulo = 1
        elif Tamanho_Subtitulo.upper() == "MEDIO":
                self.Tamanho_Subtitulo = 2
        elif Tamanho_Subtitulo.upper() == "GRANDE":
                self.Tamanho_Subtitulo = 3

    def defini_banner(self):
        if self.Tipo_de_layout == "CARTÃO COM IMAGEM À ESQUERDA - TÍTULO, SUBTÍTULO E CTA À DIREITA":
                self.Banner = "319"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À ESQUERDA - TÍTULO E CTA À DIREITA":
                self.Banner = "320"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À ESQUERDA - SUBTÍTULO E CTA À DIREITA":
                self.Banner = "321"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À ESQUERDA - TÍTULO E SUBTÍTULO À DIREITA":
                self.Banner = "271"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À DIREITA - TÍTULO, SUBTÍTULO E CTA À ESQUERDA":
                self.Banner = "322"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À DIREITA - TÍTULO E CTA À ESQUERDA":
                self.Banner = "323"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À DIREITA - SUBTÍTULO E CTA À ESQUERDA":
                self.Banner = "324"
        elif self.Tipo_de_layout == "CARTÃO COM IMAGEM À DIREITA - TÍTULO E SUBTÍTULO À ESQUERDA":
                self.Banner = "275"
        elif self.Tipo_de_layout == "POPUP COM IMAGEM SUPERIOR - TITULO, SUBTÍTULO, TEXTO CTA (BOTÃO)":
                self.Banner = "333"
        elif self.Tipo_de_layout == "POPUP COM IMAGEM INFERIOR - TITULO, SUBTÍTULO, TEXTO CTA (BOTÃO)":
                self.Banner = "334"
        elif self.Tipo_de_layout == "POPUP COM IMAGEM LIVRE (TEXTOS JÁ FIXOS NA IMAGEM)":
                self.Banner = "335"
        else:
            # Defina o valor padrão ou ação a ser tomada quando o tipo de layout não é reconhecido
            self.Banner = 0
        #elif lista[index].Tipo_de_layout == "Cartão sem imagem - Título, subtítulo e CTA":
        #        Layout_Value = 303
        #elif lista[index].Tipo_de_layout == "Cartão sem imagem - Título e CTA":
        #        Layout_Value = 304
        #elif lista[index].Tipo_de_layout == "Cartão sem imagem - Título e subtítulo":
        #        Layout_Value = 305
        #elif lista[index].Tipo_de_layout == "Cartão sem imagem - Subtítulo e CTA":
        #        Layout_Value = 306

    def print(self):
        return print(self.num, self.Tipo_de_layout, self.Banner, self.Titulo, self.Titulo_Cor, self.Subtitulo, self.Subtitulo_Cor,
                      self.Texto_CTA, self.CTA_Cor, self.Cor_Fundo_Inicial, self. Cor_Fundo_Final, self.CTA_Cor_Fundo, self.CTA_Cor_Borda, self.Cor_Botao_Fechar, self.Link) #self.Imagem)