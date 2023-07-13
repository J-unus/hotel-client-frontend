export interface BookingPage {
  content: AdminBookingDto[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: Sort
  first: boolean
  numberOfElements: number
  empty: boolean
}

export interface Pageable {
  sort: Sort
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export class AdminBookingDto {
  public room: Room;
  public startAt: string;
  public endAt: string;
}

export interface Room {
  createdBy: string
  createdDate: any
  lastModifiedBy: string
  lastModifiedDate: any
  id: number
  roomAmount: number
  size: number
  description: string
  roomPrices: any
  bookings: any
  facilities: any
}
