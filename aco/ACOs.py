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
    IDcat = "0"
    

    #Especifico para popups

    Tamanho_Titulo = None
    Tamanho_Subtitulo = None
    Cor_Botao_Fechar = None

    def __init__(self, num, Tipo_de_layout, Titulo, Titulo_Cor, Subtitulo, Subtitulo_Cor, Texto_CTA, CTA_Cor, Imagem, Cor_Fundo_Inicial, Cor_Fundo_Final, CTA_Cor_borda, CTA_Cor_Fundo, IDcat) -> None:
        self.num = str(num)[:5]
        self.Tipo_de_layout = Tipo_de_layout.upper()
        self.Titulo = Titulo.replace("R$ [", "").replace("[", "").replace("]", "").replace(" \n", "").replace("\n", "")# RETIRA AS VARIÁVEIS DO COLCHETE E TIRA O R$ CASO EXISTA. TAMBÉM TIRA O \n
        self.Titulo_Cor = Titulo_Cor[:7] # PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.Subtitulo = Subtitulo.replace("R$ [", "").replace("[", "").replace("]", "").replace(" \n", "").replace("\n", "")# RETIRA AS VARIÁVEIS DO COLCHETE E TIRA O R$ CASO EXISTA. TAMBÉM TIRA O \n
        self.Subtitulo_Cor = Subtitulo_Cor[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.Texto_CTA = Texto_CTA.replace("R$ [", "").replace("[", "").replace("]", "").replace(" \n", "").replace("\n", "")# RETIRA AS VARIÁVEIS DO COLCHETE E TIRA O R$ CASO EXISTA. TAMBÉM TIRA O \n
        self.CTA_Cor = CTA_Cor[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.Imagem = Imagem
        self.Cor_Fundo_Inicial = Cor_Fundo_Inicial[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.Cor_Fundo_Final = Cor_Fundo_Final[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.CTA_Cor_Fundo = CTA_Cor_Fundo[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        self.CTA_Cor_Borda = CTA_Cor_borda[:7]# PEGA APENAS OS 7 PRIMEIROS CARACTERES DO HEX JUNTO COM O #
        if IDcat == None:
               ...
        else:
              self.IDcat = IDcat
              self.Método_Red = "PshDpLink"

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
                      self.Texto_CTA, self.CTA_Cor, self.Cor_Fundo_Inicial, self. Cor_Fundo_Final, self.CTA_Cor_Fundo, self.CTA_Cor_Borda, self.Link) #self.Imagem)