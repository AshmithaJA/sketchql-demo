import { StrokePoint } from 'perfect-freehand';
import type React from 'react';
import type { Patch, TLBoundsWithCenter } from '~index';
import { TLBounds, TLBoundsCorner, TLBoundsEdge } from '~types';
import './polyfills';
export declare class Utils {
    /**
     * Linear interpolation betwen two numbers.
     * @param y1
     * @param y2
     * @param mu
     */
    static lerp(y1: number, y2: number, mu: number): number;
    /**
     * Linear interpolation between two colors.
     *
     * ### Example
     *
     *```ts
     * lerpColor("#000000", "#0099FF", .25)
     *```
     */
    static lerpColor(color1: string, color2: string, factor?: number): string;
    /**
     * Modulate a value between two ranges.
     * @param value
     * @param rangeA from [low, high]
     * @param rangeB to [low, high]
     * @param clamp
     */
    static modulate(value: number, rangeA: number[], rangeB: number[], clamp?: boolean): number;
    /**
     * Clamp a value into a range.
     * @param n
     * @param min
     */
    static clamp(n: number, min: number): number;
    static clamp(n: number, min: number, max: number): number;
    /**
     * Recursively clone an object or array.
     * @param obj
     */
    static deepClone<T>(obj: T): T;
    /**
     * Seeded random number generator, using [xorshift](https://en.wikipedia.org/wiki/Xorshift).
     * The result will always be betweeen -1 and 1.
     *
     * Adapted from [seedrandom](https://github.com/davidbau/seedrandom).
     */
    static rng(seed?: string): () => number;
    static pointsToLineSegments(points: number[][], closed?: boolean): number[][][];
    static getRectangleSides(point: number[], size: number[], rotation?: number): [string, number[][]][];
    /**
     * Get a circle from three points.
     * @param A
     * @param B
     * @param C
     * @returns [x, y, r]
     */
    static circleFromThreePoints(A: number[], B: number[], C: number[]): number[];
    /**
     * Find the approximate perimeter of an ellipse.
     * @param rx
     * @param ry
     */
    static perimeterOfEllipse(rx: number, ry: number): number;
    /**
     * Get the short angle distance between two angles.
     * @param a0
     * @param a1
     */
    static shortAngleDist(a0: number, a1: number): number;
    /**
     * Get the long angle distance between two angles.
     * @param a0
     * @param a1
     */
    static longAngleDist(a0: number, a1: number): number;
    /**
     * Interpolate an angle between two angles.
     * @param a0
     * @param a1
     * @param t
     */
    static lerpAngles(a0: number, a1: number, t: number): number;
    /**
     * Get the short distance between two angles.
     * @param a0
     * @param a1
     */
    static angleDelta(a0: number, a1: number): number;
    /**
     * Get the "sweep" or short distance between two points on a circle's perimeter.
     * @param C
     * @param A
     * @param B
     */
    static getSweep(C: number[], A: number[], B: number[]): number;
    /**
     * Clamp radians within 0 and 2PI
     * @param r
     */
    static clampRadians(r: number): number;
    /**
     * Clamp rotation to even segments.
     * @param r
     * @param segments
     */
    static snapAngleToSegments(r: number, segments: number): number;
    /**
     * Is angle c between angles a and b?
     * @param a
     * @param b
     * @param c
     */
    static isAngleBetween(a: number, b: number, c: number): boolean;
    /**
     * Convert degrees to radians.
     * @param d
     */
    static degreesToRadians(d: number): number;
    /**
     * Convert radians to degrees.
     * @param r
     */
    static radiansToDegrees(r: number): number;
    /**
     * Get the length of an arc between two points on a circle's perimeter.
     * @param C
     * @param r
     * @param A
     * @param B
     */
    static getArcLength(C: number[], r: number, A: number[], B: number[]): number;
    static getSweepFlag(A: number[], B: number[], C: number[]): 0 | 1;
    static getLargeArcFlag(A: number[], C: number[], P: number[]): 0 | 1;
    /**
     * Get a dash offset for an arc, based on its length.
     * @param C
     * @param r
     * @param A
     * @param B
     * @param step
     */
    static getArcDashOffset(C: number[], r: number, A: number[], B: number[], step: number): number;
    /**
     * Get a dash offset for an ellipse, based on its length.
     * @param A
     * @param step
     */
    static getEllipseDashOffset(A: number[], step: number): number;
    /**
     * Get whether a point is inside of a circle.
     * @param A
     * @param b
     * @returns
     */
    static pointInCircle(A: number[], C: number[], r: number): boolean;
    /**
     * Get whether a point is inside of an ellipse.
     * @param point
     * @param center
     * @param rx
     * @param ry
     * @param rotation
     * @returns
     */
    static pointInEllipse(A: number[], C: number[], rx: number, ry: number, rotation?: number): boolean;
    /**
     * Get whether a point is inside of a rectangle.
     * @param point
     * @param size
     */
    static pointInRect(point: number[], size: number[]): boolean;
    static pointInPolygon(p: number[], points: number[][]): boolean;
    /**
     * Get whether a point is inside of a bounds.
     * @param A The point to check.
     * @param b The bounds to check.
     * @returns
     */
    static pointInBounds(A: number[], b: TLBounds): boolean;
    /**
     * Hit test a point and a polyline using a minimum distance.
     * @param A The point to check.
     * @param points The points that make up the polyline.
     * @param distance (optional) The mininum distance that qualifies a hit.
     */
    static pointInPolyline(A: number[], points: number[][], distance?: number): boolean;
    static getBoundsSides(bounds: TLBounds): [string, number[][]][];
    /**
     * Expand a bounding box by a delta.
     *
     * ### Example
     *
     *```ts
     * expandBounds(myBounds, [100, 100])
     *```
     */
    static expandBounds(bounds: TLBounds, delta: number): TLBounds;
    /**
     * Get whether two bounds collide.
     * @param a Bounds
     * @param b Bounds
     * @returns
     */
    static boundsCollide(a: TLBounds, b: TLBounds): boolean;
    /**
     * Get whether the bounds of A contain the bounds of B. A perfect match will return true.
     * @param a Bounds
     * @param b Bounds
     * @returns
     */
    static boundsContain(a: TLBounds, b: TLBounds): boolean;
    /**
     * Get whether the bounds of A are contained by the bounds of B.
     * @param a Bounds
     * @param b Bounds
     * @returns
     */
    static boundsContained(a: TLBounds, b: TLBounds): boolean;
    /**
     * Get whether two bounds are identical.
     * @param a Bounds
     * @param b Bounds
     * @returns
     */
    static boundsAreEqual(a: TLBounds, b: TLBounds): boolean;
    /**
     * Find a bounding box from an array of points.
     * @param points
     * @param rotation (optional) The bounding box's rotation.
     */
    static getBoundsFromPoints(points: number[][], rotation?: number): TLBounds;
    /**
     * Center a bounding box around a given point.
     * @param bounds
     * @param center
     */
    static centerBounds(bounds: TLBounds, point: number[]): TLBounds;
    /**
     * Snap a bounding box to a grid size.
     * @param bounds
     * @param gridSize
     */
    static snapBoundsToGrid(bounds: TLBounds, gridSize: number): TLBounds;
    /**
     * Move a bounding box without recalculating it.
     * @param bounds
     * @param delta
     * @returns
     */
    static translateBounds(bounds: TLBounds, delta: number[]): TLBounds;
    /**
     * Rotate a bounding box.
     * @param bounds
     * @param center
     * @param rotation
     */
    static rotateBounds(bounds: TLBounds, center: number[], rotation: number): TLBounds;
    /**
     * Get the rotated bounds of an ellipse.
     * @param x
     * @param y
     * @param rx
     * @param ry
     * @param rotation
     */
    static getRotatedEllipseBounds(x: number, y: number, rx: number, ry: number, rotation?: number): TLBounds;
    /**
     * Get a bounding box that includes two bounding boxes.
     * @param a Bounding box
     * @param b Bounding box
     * @returns
     */
    static getExpandedBounds(a: TLBounds, b: TLBounds): TLBounds;
    /**
     * Get the common bounds of a group of bounds.
     * @returns
     */
    static getCommonBounds(bounds: TLBounds[]): TLBounds;
    static getRotatedCorners(b: TLBounds, rotation?: number): number[][];
    static getTransformedBoundingBox(bounds: TLBounds, handle: TLBoundsCorner | TLBoundsEdge | 'center', delta: number[], rotation?: number, isAspectRatioLocked?: boolean): TLBounds & {
        scaleX: number;
        scaleY: number;
    };
    static getTransformAnchor(type: TLBoundsEdge | TLBoundsCorner, isFlippedX: boolean, isFlippedY: boolean): TLBoundsCorner | TLBoundsEdge;
    /**
     * Get the relative bounds (usually a child) within a transformed bounding box.
     * @param bounds
     * @param initialBounds
     * @param initialShapeBounds
     * @param isFlippedX
     * @param isFlippedY
     */
    static getRelativeTransformedBoundingBox(bounds: TLBounds, initialBounds: TLBounds, initialShapeBounds: TLBounds, isFlippedX: boolean, isFlippedY: boolean): TLBounds;
    /**
     * Get the size of a rotated box.
     * @param size : ;
     * @param rotation
     */
    static getRotatedSize(size: number[], rotation: number): number[];
    /**
     * Get the center of a bounding box.
     * @param bounds
     */
    static getBoundsCenter(bounds: TLBounds): number[];
    /**
     * Get a bounding box with a midX and midY.
     * @param bounds
     */
    static getBoundsWithCenter(bounds: TLBounds): TLBoundsWithCenter;
    /**
     * Given a set of points, get their common [minX, minY].
     * @param points
     */
    static getCommonTopLeft(points: number[][]): number[];
    static getSnapPoints: (bounds: TLBoundsWithCenter, others: TLBoundsWithCenter[], snapDistance: number) => {
        offset: number[];
        snapLines: number[][][];
    };
    static deepMerge: <T>(target: T, patch: Partial<{ [P in keyof T]: T | Partial<T> | Partial<T[P] extends infer T_1 ? { [P_1 in keyof T_1]: T[P] | Partial<T[P]> | Partial<T[P][P_1] extends infer T_2 ? { [P_2 in keyof T_2]: T[P][P_1] | Partial<T[P][P_1]> | Partial<T[P][P_1][P_2] extends infer T_3 ? { [P_3 in keyof T_3]: T[P][P_1][P_2] | Partial<T[P][P_1][P_2]> | Partial<T[P][P_1][P_2][P_3] extends infer T_4 ? { [P_4 in keyof T_4]: T[P][P_1][P_2][P_3] | Partial<T[P][P_1][P_2][P_3]> | Partial<T[P][P_1][P_2][P_3][P_4] extends infer T_5 ? { [P_5 in keyof T_5]: T[P][P_1][P_2][P_3][P_4] | Partial<T[P][P_1][P_2][P_3][P_4]> | Partial<T[P][P_1][P_2][P_3][P_4][P_5] extends infer T_6 ? { [P_6 in keyof T_6]: T[P][P_1][P_2][P_3][P_4][P_5] | Partial<T[P][P_1][P_2][P_3][P_4][P_5]> | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_7 ? { [P_7 in keyof T_7]: T[P][P_1][P_2][P_3][P_4][P_5][P_6] | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6]> | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_8 ? { [P_8 in keyof T_8]: T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]> | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_9 ? { [P_9 in keyof T_9]: T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]> | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_10 ? { [P_10 in keyof T_10]: T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] | Partial<T[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]> | Partial<any>; } : never>; } : never>; } : never>; } : never>; } : never>; } : never>; } : never>; } : never>; } : never>; } : never>; }>) => T;
    /**
     * Get a value from a cache (a WeakMap), filling the value if it is not present.
     *
     * ### Example
     *
     *```ts
     * getFromCache(boundsCache, shape, (cache) => cache.set(shape, "value"))
     *```
     */
    static getFromCache<V, I extends object>(cache: WeakMap<I, V>, item: I, getNext: () => V): V;
    /**
     * Get a unique string id.
     */
    static uniqueId(a?: string): string;
    /**
     * Shuffle the contents of an array.
     * @param arr
     * @param offset
     */
    static rotateArray<T>(arr: T[], offset: number): T[];
    /**
     * Debounce a function.
     */
    static debounce<T extends (...args: any[]) => void>(fn: T, ms?: number): (...args: Parameters<T>) => void;
    /**
     * Turn an array of points into a path of quadradic curves.
     *
     * @param points The points returned from perfect-freehand
     * @param closed Whether the stroke is closed
     */
    static getSvgPathFromStroke(points: number[][], closed?: boolean): string;
    /**
     * Turn an array of stroke points into a path of quadradic curves.
     * @param points - the stroke points returned from perfect-freehand
     */
    static getSvgPathFromStrokePoints(points: StrokePoint[], closed?: boolean): string;
    /**
     * Get balanced dash-strokearray and dash-strokeoffset properties for a path of a given length.
     * @param length The length of the path.
     * @param strokeWidth The shape's stroke-width property.
     * @param style The stroke's style: "dashed" or "dotted" (default "dashed").
     * @param snap An interval for dashes (e.g. 4 will produce arrays with 4, 8, 16, etc dashes).
     * @param outset Whether to outset the stroke (default false).
     * @param lengthRatio The ratio to apply to dashed lines (default 2).
     */
    static getPerfectDashProps(length: number, strokeWidth: number, style: 'dashed' | 'dotted' | string, snap?: number, outset?: boolean, lengthRatio?: number): {
        strokeDasharray: string;
        strokeDashoffset: string;
    };
    static isMobileSafari(): boolean;
    static throttle<T extends (...args: any) => any>(func: T, limit: number): (...args: Parameters<T>) => ReturnType<T>;
    /**
     * Find whether the current display is a touch display.
     */
    /**
     * Find whether the current device is a Mac / iOS / iPadOS.
     */
    static isDarwin(): boolean;
    /**
     * Get whether an event is command (mac) or control (pc).
     * @param e
     */
    static metaKey(e: KeyboardEvent | React.KeyboardEvent): boolean;
    /**
     * Reversable psuedo hash.
     * @param str string
     */
    static lns(str: string): string;
}
export default Utils;
//# sourceMappingURL=utils.d.ts.map