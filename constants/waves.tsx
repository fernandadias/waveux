export type WaveType = {
    title: string;
    icon: string;
    description: string;
    tags: string[];
    level: "Básico" | "Intermediário" | "Avançado";
    url: string;
};

export const waves: WaveType[] = [
    {
        title: "Validar Roteiro",
        icon: "map",
        url: "/validate-script",
        description: "Revisão automática para identificar clareza, objetividade e possíveis vieses nas perguntas.",
        tags: ["UX Research", "Entrevistas", "Pesquisa"],
        level: "Intermediário"
    },
    {
        title: "Tamanho da Amostra",
        icon: "users",
        url: "/sample-size",
        description: "Definir automaticamente o tamanho ideal de participantes com base no tipo e objetivo da pesquisa.",
        tags: ["UX Research", "Pesquisa"],
        level: "Intermediário"
    },
    {
        title: "Insights com IA",
        icon: "cpu",
        url: "/ai-insights",
        description: "Analisar e classificar automaticamente insights de entrevistas por relevância e frequência utilizando inteligência artificial.",
        tags: ["UX Research", "Insights", "Pesquisa"],
        level: "Avançado"
    },
    {
        title: "Copy e Microcopy",
        icon: "type",
        url: "/copy-review",
        description: "Avaliar automaticamente clareza, eficácia e persuasão de copies e microcopies em interfaces e comunicações.",
        tags: ["UI", "Copywriting"],
        level: "Intermediário"
    },
    {
        title: "Análise de Handoff",
        icon: "code",
        url: "/handoff-analysis",
        description: "Garantir automaticamente que as entregas de design estão completas e claras para desenvolvimento.",
        tags: ["UI", "Gestão de Produto"],
        level: "Intermediário"
    },
    {
        title: "Definição de Tipo de Pesquisa",
        icon: "search",
        url: "/research-type",
        description: "Sugestão automática do método ideal de pesquisa com base no objetivo do estudo e contexto do projeto.",
        tags: ["Pesquisa"],
        level: "Básico"
    },
    {
        title: "Análise Heurística",
        icon: "check-square",
        url: "/heuristic-analysis",
        description: "Avaliação automática de interfaces com base em heurísticas e boas práticas, identificando problemas de usabilidade rapidamente.",
        tags: ["UI", "UX", "Auditoria"],
        level: "Intermediário"
    }
]; 