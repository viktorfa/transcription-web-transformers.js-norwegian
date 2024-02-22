declare module "@splayer/subtitle" {
    // Timestamps in milliseconds
    export interface SubSegment {
        start: number;
        end: number;
        text: string;
    }

    export function stringifyVtt(segments: SubSegment[]): string;
    export function stringify(segments: SubSegment[]): string;
}
