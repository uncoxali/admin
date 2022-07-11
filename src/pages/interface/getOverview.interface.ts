export interface GetOverview {
  status: number;
  body: Body | null;
}
export interface Body {
  live_data?: LiveDataEntity[] | null | undefined;
  new_users?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  new_sub?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  cancel_sub?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  expire_sub?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  performance_fee?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  service_fee?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
  unpaid_performance_fee?:
    | NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity[]
    | null;
}
export interface LiveDataEntity {
  title: string;
  value: number;
}
export interface NewUsersEntityOrNewSubEntityOrCancelSubEntityOrExpireSubEntityOrPerformanceFeeEntityOrServiceFeeEntityOrUnpaidPerformanceFeeEntity {
  date: string;
  value: number;
  cumulative_value: number;
}
