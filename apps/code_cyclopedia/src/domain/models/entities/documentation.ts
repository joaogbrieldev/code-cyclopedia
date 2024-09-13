import { IDocumentation } from '@code_cyclopedia/domain/contracts/entities/documentation';
import { EntityBase } from 'libs/shared/domain/data/entities/entity-base';

export class Documentation extends EntityBase implements IDocumentation {
  body: string;
  ownerUser: string;
  constructor(props: IDocumentation) {
    super();
    Object.assign(this, props);
  }
}
