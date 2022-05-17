import { stringToU8a, u8aToHex } from '@polkadot/util';
import { signatureVerify } from '@polkadot/util-crypto';
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
      const message = stringToU8a('Z-Qg29b3D9KjfmdHj0kZD');
      const signature = '0x28e655a1f62c3188e905960decab7219a744d62d5ce9415153c670dd42db2b6292cff2da3543c27d204ce1e7e3b950dc10145efa58df6ca896d871737fd15089';
      const accountId = '5HT8Mty5U5hFKVwv24uFswX2e41vurU3F5rkLMoETR8XmjFy';
      const { isValid } = signatureVerify(message, signature, accountId);
      // console.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);
      console.log(`${signature} is ${isValid ? 'valid' : 'invalid'}`);
    return 'Hello World!';
  }
}