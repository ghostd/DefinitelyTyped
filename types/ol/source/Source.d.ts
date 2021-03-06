import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import BaseObject, { ObjectEvent } from 'ol/Object';
import { FrameState } from 'ol/PluggableMap';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import State from 'ol/source/State';
export type Attribution = ((param0: FrameState) => string | string[]);
export type AttributionLike = string | string[] | Attribution;
export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    projection?: ProjectionLike;
    state?: State;
    wrapX?: boolean;
}
export default class Source extends BaseObject {
    constructor(options: Options);
    protected setState(state: State): void;
    getAttributions(): Attribution;
    getAttributionsCollapsible(): boolean;
    getProjection(): Projection;
    getResolutions(): number[];
    getState(): State;
    getWrapX(): boolean;
    refresh(): void;
    setAttributions(attributions: AttributionLike): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
