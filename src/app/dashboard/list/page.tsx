'use client'

import React, { useState } from 'react';

import ListingItem from '@/src/components/ListingItem';
import { Empty, Flex, Input } from 'antd';
import { useRouter } from 'next/navigation';
import listingItems from '@/src/data/ListingItems';
import ListingItemResponse from '@/src/models/responses/ListItemResponse';

const { Search } = Input;

export default function List() {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const router = useRouter();

  function searchItem(item: ListingItemResponse) {
    if (!searchTerm) {
      return true;
    }
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  }

  const items = listingItems.filter(searchItem);

  return (
    <div className="page-list ">
      <Search 
        placeholder="input search text"
        allowClear
        onSearch={setSearchTerm}
        className="mb-5"/>


    {items.length > 0
      ? <div className="listing-items sm:grid-cols-2 grid md:grid-cols-3 gap-6 " >
        {items.map(x => (
          <div className='listing-item min-h-10 '>
            <ListingItem
              item={x}
              onClick={() => {
                router.push(`/dashboard/list/detail/${x.id}`)
              }}
            />
          </div>          
        ))        
      }
      </div>
      : (
        <Flex justify='center'>
          <Empty />
        </Flex>
      )}
    </div>

  );
}