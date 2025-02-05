import type { TLShape } from '~types';
import type { TLShapeUtil } from './TLShapeUtil';
export declare type TLShapeUtilsMap<T extends TLShape> = {
    [K in T['type']]: TLShapeUtil<Extract<T, {
        type: K;
    }>>;
};
export * from './TLShapeUtil';
//# sourceMappingURL=index.d.ts.map