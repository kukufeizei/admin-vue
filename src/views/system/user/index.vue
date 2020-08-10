<template>
	<div class="app-container">
		<div class="filter-container">
			<el-input v-model="listQuery.title" placeholder="用户名" style="width: 200px;" class="filter-item" />
			<el-button class="filter-item" type="primary" icon="el-icon-search">
				搜索
			</el-button>
			<el-button v-permission="['admin']" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus">
				新增
			</el-button>
		</div>

		<el-table :key="tableKey" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;">
			<el-table-column label="序号" type="index" align="center" width="50">
			</el-table-column>
			<el-table-column label="用户头像" width="180" align="center">
				<template slot-scope="{row}">
					<img style="width:60px;height: 60px;border-radius: 50%;" :src="row.imgurl" />
				</template>
			</el-table-column>
			<el-table-column label="用户名" width="180" align="center">
				<template slot-scope="{row}">
					<span>{{ row.username }}</span>
				</template>
			</el-table-column>
			<el-table-column label="角色" width="180" align="center">
				<template slot-scope="{row}">
					<span>{{ row.role }}</span>
				</template>
			</el-table-column>
			<el-table-column label="邮箱" width="200" align="center">
				<template slot-scope="{row}">
					<span>{{ row.email }}</span>
				</template>
			</el-table-column>
			<el-table-column label="用户简介" align="center">
				<template slot-scope="{row}">
					<span>{{ row.content }}</span>
				</template>
			</el-table-column>
			<el-table-column label="修改时间" width="180" align="center">
				<template slot-scope="{row}">
					<span>{{ row.time }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="380" class-name="small-padding fixed-width">
				<template slot-scope="{row,$index}">
					<el-button icon="el-icon-edit-outline" type="primary" size="small ">
						编辑用户
					</el-button>
					<el-button icon="el-icon-delete" size="small " type="danger">
						删除
					</el-button>
					<el-button icon="el-icon-setting" size="small">
						角色设置
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
		 :page-sizes="[2, 5, 10, 20]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
	</div>
</template>

<script>
	import {
		userList
	} from '@/api/user'
	export default {
		name: 'ComplexTable',
		filters: {},
		data() {
			return {
				tableKey: 0,
				list: null,
				total: 0,
				listLoading: true,
				listQuery: {
					page: 1,
					limit: 2,
				},
			}
		},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				this.listLoading = true
				userList(this.listQuery).then(response => {
					this.list = response.data.data;
					this.total = response.data.cont
					this.listLoading = false
				})
			},
			handleFilter() {
				this.listQuery.page = 1
				this.getList()
			},
			handleSizeChange(e) {
				console.log(e)
			},
			handleCurrentChange(e) {
				console.log(e)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.app-container {
		background: #fff;
		margin: 20px;

		.pagination {
			margin-top: 20px;
		}
	}

	.filter-container {
		.filter-item {
			margin-right: 10px;
		}
	}
</style>
