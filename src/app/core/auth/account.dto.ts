export class AccountDto {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string,
    public lastName: string,
    public identityNumber: string,
  ) {}
}
