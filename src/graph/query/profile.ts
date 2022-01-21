

import {
  ProfileSegment,
  CreateProfileTask,
  GetProfileTaskList,
  GetProfileTaskSegmentList,
  GetProfileAnalyze,
  GetProfileTaskLogs,
} from '../fragments/profile';

export const queryProfileSegment = `query queryProfileSegment(${ProfileSegment.variable}) {${ProfileSegment.query}}`;

export const saveProfileTask = `mutation createProfileTask(${CreateProfileTask.variable}) {${CreateProfileTask.query}}`;

export const getProfileTaskList = `query getProfileTaskList(${GetProfileTaskList.variable}) {
  ${GetProfileTaskList.query}}`;

export const getProfileTaskSegmentList = `query getProfileTaskSegmentList(${GetProfileTaskSegmentList.variable}) {
  ${GetProfileTaskSegmentList.query}}`;

export const getProfileAnalyze = `query getProfileAnalyze(${GetProfileAnalyze.variable}) {${GetProfileAnalyze.query}}`;

export const getProfileTaskLogs = `query profileTaskLogs(${GetProfileTaskLogs.variable}) {${GetProfileTaskLogs.query}}`;
