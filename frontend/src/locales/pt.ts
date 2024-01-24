export default {
    header: {
        home: 'Início',
        analyze: 'Analisar',
        about: 'Sobre',
    },
    welcome: {
        analysis: {
            title: 'Análise',
            label: 'Analisar',
            description: 'Carregue sua planilha de dados de assinantes e visualize métricas chave de negócios.',
            detailedDescription: ''
        },
        importanceOfAnalysis: {
            title: 'Importância da Análise',
            label: 'Saiba Mais',
            description: 'Entenda por que a análise de métricas é crucial para a gestão do seu negócio.',
            detailedDescription: '<p>A análise de dados e o uso de métricas são ferramentas poderosas que permitem às empresas tomar decisões estratégicas informadas e impulsionar o crescimento.</p><p>Elas fornecem uma visão objetiva do desempenho, identificam oportunidades de mercado, melhoram a eficiência operacional, monitoram o retorno sobre investimento e aumentam a competitividade.</p><p>A gestão por indicadores é importante para identificar gaps ou falhas, traçar metas e estratégias, além de controlar gastos. Além disso, a análise de métricas ajuda a alinhar a equipe, pois todos os envolvidos passam a saber o que estão fazendo certo e o que precisam melhorar para alcançar os objetivos da empresa.</p>'
        },
        whatIsMRR: {
            title: 'O que é MRR?',
            label: 'Saiba Mais',
            description: 'Aprenda o que é Receita Recorrente Mensal (MRR) e por que ela é importante.',
            detailedDescription: '<p>MRR, ou Receita Recorrente Mensal, é uma métrica vital para empresas que operam em modelos baseados em assinatura.</p><p>Ela representa a receita previsível e consistente gerada mensalmente por assinaturas ativas.</p><p>Por isso, o MRR é crucial para as empresas avaliarem o fluxo de caixa e tomarem decisões financeiras informadas.</p><p>Além disso, essa métrica pode ser de grande auxílio para uma boa gestão estratégica, pois através dela, é possível observar quais setores necessitam de um maior investimento ou de revisão dos processos existentes.</p>'
        },
        whatIsChurnRate: {
            title: 'O que é Churn Rate?',
            label: 'Saiba Mais',
            description: 'Aprenda o que é Churn Rate e por que ele é importante.',
            detailedDescription: '<p>Churn Rate é uma métrica que representa a taxa de cancelamento de assinaturas em um determinado período de tempo.</p><p>É uma métrica importante para as empresas que operam em modelos baseados em assinatura, pois indica a satisfação dos clientes e a saúde do negócio.</p><p>Além disso, o Churn Rate é uma métrica que pode ser utilizada para avaliar a eficácia das estratégias de retenção de clientes e para identificar oportunidades de melhorias.</p>'
        },
    },
    analyze: {
        titleUpload: 'Envie seu arquivo CSV/XLSX para ver as análises de MRR e ChurnRate da sua empresa',
        selectHint: 'Escolha um arquivo',
        buttonTitle: 'Enviar',
        noFileError: 'Por favor, selecione um arquivo antes de fazer o upload!',
        invalidFileError: 'Por favor, selecione um arquivo CSV ou XLSX!',
        successMessage: 'Arquivo enviado com sucesso!',
        loading: 'Carregando...',
        serverError: 'Erro ao tentar conectar ao servidor!',
    },
    about: {
        titleProject: 'Sobre esse projeto',
        descriptionProject: 'Este projeto foi um desafio para desenvolver uma aplicação web full-stack usando Vue.js e NestJS. A aplicação permite aos usuários carregar uma planilha de dados de assinantes e visualizar métricas chave de negócios em gráficos interativos.',
        titleTechnologies: 'Tecnologias usadas',
        descriptionTechnologies: 'Este projeto foi desenvolvido usando várias tecnologias, incluindo Vue.js com Quasar para o front-end e o NestJS para o back-end.',
        titleChallenges: 'Desafios superados',
        descriptionChallenges: 'O maior desafio foi desenvolver a aplicação em uma stack diferente, mas como tinha tempo suficiente para aprender as tecnologias, foi possível superar esse desafio.',
    },
    footer: {
        madeBy: 'Feito por',
        getInTouch: 'Entre em contato ou saiba mais sobre mim',
    }
};