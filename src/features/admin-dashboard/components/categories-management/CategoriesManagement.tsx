import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { AppTable } from '../../../../solutions/components/app-table';
import { authSelectors } from '../../../auth/store';
import { adminActions, adminSelectors } from '../../store';

const headerConfigs = [
  {
    header: '#',
    isCenter: false,
  },
  {
    header: 'Name',
    isCenter: false,
  },
  {
    header: 'Number of uses',
    isCenter: true,
  },
];

const rowConfigs = [
  {
    field: 'id',
    isCenter: false,
  },
  {
    field: 'categoryName',
    isCenter: false,
  },
  {
    field: 'numberOfUses',
    isCenter: true,
  },
];

const CategoriesManagement = () => {
  const categories = useAppSelector(adminSelectors.selectAllCategories);
  const currentUser = useAppSelector(authSelectors.selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(adminActions.getAllCategoriesForManagement(currentUser.id));
  }, []);

  return (
    <>
      <Box padding={4}>
        <Typography variant='h3' marginBottom={2}>
          Categories
        </Typography>
        <AppTable
          headerConfigs={headerConfigs}
          rowConfigs={rowConfigs}
          data={categories}
          rowKey='id'
          searchByField='categoryName'
          searchPlaceholder='Search by name'
          isFilterByOption={false}
        />
      </Box>
    </>
  );
};

export default React.memo(CategoriesManagement);
