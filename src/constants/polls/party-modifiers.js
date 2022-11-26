import { QuestionIds, Candidates } from './enums';


export const POLL_PARTY_MODIFIERS = {
    [QuestionIds.DefenseIsolate]: {
        [Candidates.Bra]: 4,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: 5,
        [Candidates.Nus]: 1
    },
    [QuestionIds.DefensePrivatise]: {
        [Candidates.Bra]: -1,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: 2
    },
    [QuestionIds.DefenseXenoWarEffort]: {
        [Candidates.Bra]: 2,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: -5,
        [Candidates.Nus]: 5
    },
    [QuestionIds.FinanceImportTax]: {
        [Candidates.Bra]: 5,
        [Candidates.Cor]: -2,
        [Candidates.Bec]: 1,
        [Candidates.Nus]: -3
    },
    [QuestionIds.InterFacLeadingRole]: {
        [Candidates.Bra]: 3,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -5,
        [Candidates.Nus]: 4
    },
    [QuestionIds.InterFacCommand]: {
        [Candidates.Bra]: 4,
        [Candidates.Cor]: 4,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: 5
    },
    [QuestionIds.InterFacOurValues]: {
        [Candidates.Bra]: 5,
        [Candidates.Cor]: 0,
        [Candidates.Bec]: 3,
        [Candidates.Nus]: -2
    },
    [QuestionIds.GovGlobalInfluence]: {
        [Candidates.Bra]: 4,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: -2
    },
    [QuestionIds.GovPlanetaryInfluence]: {
        [Candidates.Bra]: -3,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: 4,
        [Candidates.Nus]: 2
    },
    [QuestionIds.PortalInfrastructure]: {
        [Candidates.Bra]: 4,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: 5
    },
    [QuestionIds.GovOwnedCorps]: {
        [Candidates.Bra]: -4,
        [Candidates.Cor]: -3,
        [Candidates.Bec]: 5,
        [Candidates.Nus]: -3
    },
    [QuestionIds.CultureEducateExternals]: {
        [Candidates.Bra]: 5,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: 3,
        [Candidates.Nus]: -2
    },
    [QuestionIds.CultureOpenWorldPolicy]: {
        [Candidates.Bra]: -4,
        [Candidates.Cor]: 3,
        [Candidates.Bec]: 1,
        [Candidates.Nus]: 2
    },
    [QuestionIds.CultureIntegrateExternals]:
    {
        [Candidates.Bra]: -5,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: 5
    },
    [QuestionIds.CultureScienceLead]:
    {
        [Candidates.Bra]: 2,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -3,
        [Candidates.Nus]: 4
    },
    [QuestionIds.FinanceEducationCosts]: {
        [Candidates.Bra]: 3,
        [Candidates.Cor]: 5,
        [Candidates.Bec]: -5,
        [Candidates.Nus]: 1
    },
    [QuestionIds.GovMairsInfluence]: {
        [Candidates.Bra]: 2,
        [Candidates.Cor]: 1,
        [Candidates.Bec]: -5,
        [Candidates.Nus]: 1
    },
};
