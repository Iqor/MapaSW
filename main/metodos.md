# Lista de métodos legais

* **Municípios**: *municipios*
	- *Código Município*(codigo_municipio): retorna o código do município. Usado em outros métodos.
	- *Nome Município*(nome_municipio): retorna o nome do município, em maiúsculas, usado para identificação. 
* **Órgãos**:*orgaos*
	- *Código Município*(**codigo_municipio**): Obrigatório, pois vai retornar os órgãos de um município em específico.
	- *Exercício Orçamento*(**exercicio_orcamento**): Obrigatório, pois vai retornar os órgãos de um município durante um determinado ano. Para anos abaixo de 2007 usar somente o ano, para anos acima ou iguais adicionar "00" no final. 
	- *Código Órgao*(codigo_orgao): Retorna o código de um órgão de um município em específico. Usado em outros métodos.
	- *Nome Órgão*(nome_orgao): Retorna o nome do órgão.
* **Despesa_Projeto_Atividade**: *despesa_projeto_atividade*
	- *Código Município*(**codigo_municipio**): Obrigatório, pois vai retornar os órgãos de um município em específico.
	- *Exercício Orçamento*(**exercicio_orcamento**): Obrigatório, pois vai retornar os órgãos de um município durante um determinado ano. Para anos abaixo de 2007 usar somente o ano, para anos acima ou iguais adicionar "00" no final. 
	- *Código Órgao*(codigo_orgao): Retorna o código de um órgão de um município em específico. Usado em outros métodos.
	- *Nome Projeto Atividade*(nome_projeto_atividade): Retorna o nome do projeto.
	- *Descrição Projeto Atividade*(descricao_projeto_atividade): Retorna a descrição do projeto.
	- *Valor Total Fixado Projeto Atividade*(valor_total_fixado_projeto_atividade): Retorna o valor fixado parao projeto
* **Dados_Orçamentos**: *dados_orcamento*
	- *Código Município*(**codigo_municipio**): Obrigatório, pois vai retornar os órgãos de um município em específico.
	- *Exercício Orçamento*(**exercicio_orcamento**): Obrigatório, pois vai retornar os órgãos de um município durante um determinado ano. Para anos abaixo de 2007 usar somente o ano, para anos acima ou iguais adicionar "00" no final.
	- *Valor Total Fixado Orçamento*(valor_total_fixado_orcamento): Retorna o valor bruto que foi fixado para os gastos no município naquele ano.
	- *Número Percentual Suplementações Orçamento*(numero_perc_sup_orcamento): Retorna qual a porcentagem do orçamento teve que ser adicionada para o gastos do município naquele ano.
	- *Valor Total Suplementações Orçamento*(valor_total_supl_orcamento): Retorna o valor bruto que teve que ser adicionado para os gastos do município.