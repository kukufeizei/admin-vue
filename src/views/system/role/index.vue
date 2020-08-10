<template>
	<div class="app-container">
		<div class="filter-container">
			<el-input v-model="listQuery.title" placeholder="用户名" style="width: 200px;" class="filter-item" />
			<el-button class="filter-item" type="primary" icon="el-icon-search">
				搜索
			</el-button>
			<el-button  v-permission="['admin']" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="dialogAddVisible = true">
				新增
			</el-button>
		</div>

		<el-table :key="tableKey" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;">
			<el-table-column label="序号" type="index" align="center" width="50">
			</el-table-column>
			<el-table-column label="角色名" width="180" align="center">
				<template slot-scope="{row}">
					<span>{{ row.role }}</span>
				</template>
			</el-table-column>
			<el-table-column label="修改时间">
				<template slot-scope="{row}">
					<span>{{ row.time }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="400" class-name="small-padding fixed-width">
				<template slot-scope="{row,$index}">
					<el-button icon="el-icon-edit-outline" type="primary" size="small ">
						编辑
					</el-button>
					<el-button icon="el-icon-delete" size="small " type="danger">
						删除
					</el-button>
					<el-button icon="el-icon-setting" size="small " @click="set(row)">
						权限设置
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
		 :page-sizes="[2, 5, 10, 20]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
		<el-dialog title="新增角色" :visible.sync="dialogAddVisible">
		  <el-form :model="addData">
		    <el-form-item label="角色姓名" :label-width="formLabelWidth">
		      <el-input v-model="addData.name" autocomplete="off"></el-input>
		    </el-form-item>
			<el-form-item label="角色权限" :label-width="formLabelWidth">
			  <el-tree
			    :data="roledata"
			    show-checkbox
			    node-key="id"
			    :props="defaultProps">
			  </el-tree>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogAddVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogAddVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
		<el-dialog :title="`${roleText}权限查看`" :visible.sync="dialogRole">
		  <el-form :model="addData">
			<el-form-item label="角色权限" :label-width="formLabelWidth">
			  <el-tree
			    :data="roledatauser"
			    show-checkbox
			    node-key="id"
			    :default-expanded-keys="[1,2,3,4]"
			    :default-checked-keys="[1,2,3,4,5]"
			    :props="defaultProps">
			  </el-tree>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogRole = false">取 消</el-button>
		    <el-button type="primary" @click="dialogRole = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		roleList,
		roleMenus
	} from '@/api/user'
	import{
		getRoutes
	}from '@/api/menu'
	export default {
		name: 'ComplexTable',
		filters: {},
		data() {
			return {
				addData:{
					name:''
				},
				formLabelWidth: '120px',
				dialogAddVisible:false, //新增弹窗
				dialogRole:false,//权限查看
				tableKey: 0,
				list: null,
				total: 0,
				listLoading: true,
				listQuery: {
					page: 1,
					limit: 2,
				},
				defaultProps: {
				  children: 'children',
				  label: 'name'
				},
				roleText:'',
				roledata:[],
				roledatauser:[]
			}
		},
		created() {
			this.getList()
			roleMenus().then((res)=>{
				console.log(res)
				this.roledata = res.data;
			})
		},
		methods: {
			getList() {
				this.listLoading = true
				roleList(this.listQuery).then(response => {
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
			},
			set(row){
				this.dialogRole =true;
				this.roleText = row.role;
				getRoutes(row.token).then((res)=>{
					this.roledatauser =res.data;
				})
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
