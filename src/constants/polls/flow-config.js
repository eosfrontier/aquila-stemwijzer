import {QuestionCategories, QuestionIds} from './enums';

export const POLL_STEP_ORDER = [
  QuestionIds.DefenseIsolate,
  QuestionIds.DefensePrivatise,
  QuestionIds.DefenseXenoWarEffort,
  QuestionIds.FinanceImportTax,
  QuestionIds.InterFacLeadingRole,
  QuestionIds.InterFacCommand,
  QuestionIds.InterFacOurValues,
  QuestionIds.GovGlobalInfluence,
  QuestionIds.GovPlanetaryInfluence,
  QuestionIds.PortalInfrastructure,
  QuestionIds.GovOwnedCorps,
  QuestionIds.CultureEducateExternals,
  QuestionIds.CultureOpenWorldPolicy,
  QuestionIds.CultureIntegrateExternals,
  QuestionIds.CultureScienceLead,
  QuestionIds.FinanceEducationCosts,
  QuestionIds.GovMairsInfluence,
];

export const POLL_CATEGORIES = [
  {
    label: QuestionCategories.Def,
    questions: [
      QuestionIds.DefenseIsolate,
      QuestionIds.DefensePrivatise,
      QuestionIds.DefenseXenoWarEffort,
    ],
  },
  {
    label: QuestionCategories.ICC,
    questions: [
      QuestionIds.InterFacCommand,
      QuestionIds.InterFacLeadingRole,
      QuestionIds.InterFacOurValues,
    ],
  },
  {
    label: QuestionCategories.Gov,
    questions: [
      QuestionIds.GovGlobalInfluence,
      QuestionIds.GovPlanetaryInfluence,
      QuestionIds.GovOwnedCorps,
      QuestionIds.GovMairsInfluence,
    ],
  },
  {
    label: QuestionCategories.Finance,
    questions: [
      QuestionIds.FinanceEducationCosts,
      QuestionIds.FinanceImportTax,
      QuestionIds.PortalInfrastructure,
    ],
  },
  {
    label: QuestionCategories.Culture,
    questions: [
      QuestionIds.CultureEducateExternals,
      QuestionIds.CultureOpenWorldPolicy,
      QuestionIds.CultureScienceLead,
      QuestionIds.CultureIntegrateExternals,
    ],
  },
];
