import { merge as baseMerge, mergeWith } from 'lodash-es'

export const merge: typeof baseMerge = <T = object>(target: T, source: T) => {
    mergeWith(target, source, (objValue, srcValue) => {
        if (Array.isArray(objValue)) {
            return srcValue
        }
    })
}
