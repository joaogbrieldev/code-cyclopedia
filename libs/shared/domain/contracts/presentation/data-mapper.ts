export interface IDataMapper<DomainModel, OutputDto> {
  mapOutputDto(domainItem: DomainModel): Readonly<OutputDto>;
}
