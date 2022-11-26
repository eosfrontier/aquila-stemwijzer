import { QuestionIds, Candidates } from './enums';



function testRandOpinion() {
    const min = Math.ceil(-5);
    const max = Math.floor(5);
    let _score = Math.floor(Math.random() * (max - min) + min);

    if (_score === 0) _score = 1;
    return _score;

}

export const POLL_PARTY_MODIFIERS = {
    [QuestionIds.DefenseIsolate]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },

    [QuestionIds.DefensePrivatise]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.DefenseXenoWarEffort]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.FinanceImportTax]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.InterFacLeadingRole]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.InterFacCommand]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.InterFacOurValues]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.GovGlobalInfluence]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.GovPlanetaryInfluence]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.PortalInfrastructure]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.GovOwnedCorps]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.CultureEducateExternals]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.CultureOpenWorldPolicy]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.CultureIntegrateExternals]:
    {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.CultureScienceLead]:
    {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.FinanceEducationCosts]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
    [QuestionIds.GovMairsInfluence]: {
        [Candidates.Bec]: testRandOpinion(),
        [Candidates.Bra]: testRandOpinion(),
        [Candidates.Cor]: testRandOpinion(),
        [Candidates.Nus]: testRandOpinion()
    },
};
